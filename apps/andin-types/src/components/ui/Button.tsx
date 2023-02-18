"use client";
import clsx from "clsx";
import {
  FC,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from "react";

const Button: FC<{
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onClick }) => {
  const [pressed, setPressed] = useState(false);

  const onClickHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setPressed(!pressed);
      onClick?.(e);
    },
    [onClick, pressed]
  );

  return (
    <button
      onClick={onClickHandler}
      className={clsx(
        "p-3 rounded-md shadow-bumped bg-bumped transition ease-in-out",
        {
          "shadow-pressed bg-transparent": pressed,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
