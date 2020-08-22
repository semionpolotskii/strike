import React from "react";
import Link from "next/link";

const SourceLink = ({ href, children }) => (
  <>
    <sup>
      <a className="source-link" href={href} target="_blank">
        {children || 'читать полностью'}
      </a>
    </sup>
    <style jsx>{`
      .source-link {
        text-decoration: none;
        color: #1890ff;
      }
    `}</style>
  </>
);

export default SourceLink;
