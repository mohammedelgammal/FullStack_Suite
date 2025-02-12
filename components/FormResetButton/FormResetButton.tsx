"use client";
import { useRouter } from "next/navigation";

const FormResetButton = () => {
  const router = useRouter();
  const handleReset: () => void = () => {
    const formElement = document.getElementById(
      "search-form"
    ) as HTMLFormElement;

    if (formElement) {
      formElement.reset();
      router.push("");
    }
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default FormResetButton;
