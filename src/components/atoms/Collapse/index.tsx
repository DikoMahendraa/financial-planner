import { useState } from 'react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleComponent: React.FC<CollapsibleProps> = ({
  title,
  children
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="w-full p-4 bg-white border border-r-2 border-b-2 border-vampire-black rounded cursor-pointer mb-2"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">{title}</h2>
        <button className="focus:outline-none text-gray-600 hover:text-gray-800">
          <svg
            className={`h-5 w-5 transform ${
              isCollapsed ? 'rotate-0' : 'rotate-180'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isCollapsed ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            )}
          </svg>
        </button>
      </div>
      {!isCollapsed && (
        <div className="mt-4 transition-opacity duration-300">{children}</div>
      )}
    </div>
  );
};

export default CollapsibleComponent;
