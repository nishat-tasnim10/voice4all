import { useEffect, useMemo, useState } from "react";
import { co2 } from "@tgwf/co2";
import "./CarbonFootprint.css";

function getDataTransfer(entries) {
  return entries
    .filter((resource) => resource instanceof PerformanceResourceTiming)
    .reduce((total, resource) => {
      return total + resource.transferSize;
    }, 0);
}

function useBytesTransferred() {
  const [bytesTransferred, setBytesTransferred] = useState(0);

  useEffect(() => {
    let totalBytes = 0;
    const countedResources = new Set();

    const calculateDataTransfer = (entries) => {
      entries.forEach((resource) => {
        if (
          resource instanceof PerformanceResourceTiming &&
          !countedResources.has(resource)
        ) {
          countedResources.add(resource);
          totalBytes += resource.transferSize || 0;
        }
      });

      setBytesTransferred(totalBytes);
    };

    // Count resources already loaded
    calculateDataTransfer(
      performance.getEntriesByType("resource")
    );

    // Watch for new resources
    const observer = new PerformanceObserver((list) => {
      calculateDataTransfer(list.getEntries());
    });

    observer.observe({
      type: "resource",
      buffered: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return bytesTransferred;
}

function CarbonFootprint() {
  const bytesTransferred = useBytesTransferred();

  const gramsCO2 = useMemo(() => {
    const swd = new co2({
      model: "swd",
    });

    return swd.perByte(bytesTransferred);
  }, [bytesTransferred]);

  return (
    <div className="carbon-footprint">
      <h3>Website Carbon Footprint</h3>

      <p>
        <strong>Data Transferred:</strong>{" "}
        {bytesTransferred} bytes
      </p>

      <p>
        <strong>Estimated CO₂:</strong>{" "}
        {gramsCO2.toFixed(2)} g
      </p>
    </div>
  );
}

export default CarbonFootprint;