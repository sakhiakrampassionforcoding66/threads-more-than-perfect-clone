"use client";

import Image from "next/image";
import Link from "next/link";

const EditButton = ({type}: {type : string}) => {
  return (
      <Link href="/onboarding">
        <Image
          src="/assets/edit.svg"
          alt="Edit Icon"
          width={16}
          height={16}
          className="object-contain"
        />
      </Link>
  );
}

export default EditButton;