import React from 'react';

interface InputRenderingBlockProps {
  inputType: string;
  itemId: string | number;
  itemType: string;
  status: string;
  selectedId: string | number;
  updatedData: Record<string, string>;
  setUpdatedData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  editing?: boolean;
}

const InputRenderingBlock: React.FC<InputRenderingBlockProps> = ({
  inputType,
  itemId,
  itemType,
  status,
  selectedId,
  updatedData,
  setUpdatedData,
  editing = true,
}) => {
  return editing && status === "editing" && selectedId === itemId ? (
    <input
      type="text"
      className="border border-gray-400 px-4 py-2 w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={updatedData[inputType] || ''} // Prevent uncontrolled input warning
      name={inputType}
      onChange={(e) => {
        setUpdatedData({
          ...updatedData,
          [e.target.name]: e.target.value,
        });
      }}
      aria-label={`Edit ${inputType}`}
    />
  ) : (
    <span className="text-gray-700">{itemType}</span>
  );
};

export default InputRenderingBlock;