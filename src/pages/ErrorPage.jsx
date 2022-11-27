import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="absolute flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-3xl font-bold text-blue-500">Error: {error.statusText || error.message}</h1>
      <p className="mt-3 text-gray-500">That's all what we know</p>
    </div>
  );
}
