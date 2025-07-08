export function Button({ children, onClick, variant = 'solid' }) {
  const styles = variant === 'outline'
    ? 'border border-red-700 text-red-700'
    : 'bg-red-700 text-white';
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold ${styles}`}
    >
      {children}
    </button>
  );
}