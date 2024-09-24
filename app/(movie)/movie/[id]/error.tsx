"use client";

export default function ErrorPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>error!! go back</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
