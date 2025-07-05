type Props = {
  type: 'loading' | 'error' | 'empty';
  message?: string;
};

export default function Status({ type, message }: Props) {
  const base = "text-center py-10 text-lg";
  const styles = {
    loading: "text-gray-500",
    error: "text-red-500",
    empty: "text-gray-500",
  };

  const defaultMsg = {
    loading: "Loading...",
    error: "Something went wrong.",
    empty: "No data found.",
  };

  return <p className={`${base} ${styles[type]}`}>{message || defaultMsg[type]}</p>;
}
