import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    }else if (href) {
      router.push(href);
    }
  }, [onClick, auth, currentUser, href, loginModal, router]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative flex items-center justify-center w-16 p-4 rounded-full cursor-pointer h-14 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden gap-4 p-4 rounded-full cursor-pointer lg:flex items-row hover:bg-slate-300 hover:bg-opacity-10">
        <Icon size={24} color="white" />
        <p className="hidden text-xl text-white lg:block">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
