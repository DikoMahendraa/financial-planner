import { ICArrow } from '@/components/icons/ICArrow';

type CalculatorProps = {
  onClickButton: (params: string) => void;
  onClear: () => void;
  onDelete: () => void;
};

const CalculatorComponent = ({
  onClickButton,
  onClear,
  onDelete
}: CalculatorProps) => {
  return (
    <div className="w-full mx-auto p-4 bg-white rounded shadow-md">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index}
            className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100 py-4"
            onClick={() => onClickButton(String(index + 1))}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100"
          onClick={() => onClickButton(String(0))}
        >
          0
        </button>
        <button
          className="flex justify-center items-center p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100 text-gray-500"
          onClick={onDelete}
        >
          <ICArrow />
          Delete
        </button>
        <button
          className="p-2 border border-r-2 border-b-2 border-vampire-black rounded hover:bg-gray-100 text-gray-500"
          onClick={onClear}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalculatorComponent;
