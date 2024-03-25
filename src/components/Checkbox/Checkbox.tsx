import { CheckboxProps } from './Checkbox.type';

export function Checkbox({ label, value, onChange }: CheckboxProps) {
  return (
    <div className={'flex gap-2 items-center mt-2.5'} onClick={onChange}>
      <input type={'checkbox'} checked={value} className={'size-5'} />
      <label htmlFor="" className={'text-gray-500'}>
        {label}
      </label>
    </div>
  );
}
