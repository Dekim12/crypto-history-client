interface TextInputProps {
  label: string;
  value: string;
  onSetValue: (v: string) => void;
  type?: string;
}

export default function TextInput({
  label,
  value,
  onSetValue,
  type,
}: TextInputProps) {
  const isValid = false;

  return (
    <label className='mb-3 flex flex-col items-center'>
      <span>{label}</span>
      <input
        className={`h-9 w-3/4 rounded px-3 text-xl shadow-xl ${
          isValid ? 'border border-my-col-1' : 'border-2 border-red-600'
        }`}
        required
        type={type ?? 'text'}
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
      />
    </label>
  );
}
