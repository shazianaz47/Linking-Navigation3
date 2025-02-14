import Link from "next/link";
export default function Footer() {
    return (
      <div className="bg-gray-200 p-4 ">
        <p>Footer content here</p>
        <ul>
        <li><Link href={"/"}>Home</Link> </li>
      </ul>
      </div>
    );
  }
  