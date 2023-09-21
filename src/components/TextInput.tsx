interface TextInputProps {
  label: string;
  value: string;
  onSetValue: (v: string) => void;
}

export default function TextInput({
  label,
  value,
  onSetValue,
}: TextInputProps) {
  return (
    <label className='mb-3 flex flex-col items-center'>
      <span>{label}</span>
      <input
        className='h-9 w-3/4 rounded border border-my-col-1 px-3 text-xl shadow-xl'
        required
        type='text'
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
      />
    </label>
  );
}
