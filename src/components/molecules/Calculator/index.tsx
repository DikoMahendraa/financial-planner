import { useState } from 'react';

const CalculatorComponent: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const showInput = false;

  const handleButtonClick = (value: number | string) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded shadow-md">
      {showInput && (
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={input}
            readOnly
          />
        </div>
      )}
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index}
            className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100"
            onClick={() => handleButtonClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100 text-gray-500"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CalculatorComponent;
