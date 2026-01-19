import React, { useState, useEffect } from "react";
import Metadata from "../../nonview/core/Metadata";
import MetadataView from "../moles/MetadataView";

export default function HomePage() {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    async function loadRandomMetadata() {
      const randomMetadata = await Metadata.random();
      setMetadata(randomMetadata);
    }
    loadRandomMetadata();
  }, []);

  return <MetadataView metadata={metadata} />;
}
