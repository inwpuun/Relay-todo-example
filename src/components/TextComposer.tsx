import './../css/style.css'

type Props = {text: string, onChange: (newValue: string) => void, onReturn: () => void}

export default function TextComposer({ text, onChange, onReturn }: Props) {
    return (
      <input type='text'
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            onReturn();
          }
        }}
        placeholder='Create a new todo...'
      />
    );
  }