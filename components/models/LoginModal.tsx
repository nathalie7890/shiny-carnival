import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";

//components
import Input from "../input";
import Model from "../Model";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);
      //   TODO ADD LOG IN
      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  const footerContent = (
    <div className="mt-4 text-center text-neutral-400">
      <p>
        First time using Twitter?
        <span onClick={onToggle} className="text-white cursor hover:underline hover:cursor-pointer">
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );
  return (
    <Model
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
