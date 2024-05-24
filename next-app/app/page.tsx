
import {  UTS3ClientCore } from "@repo/internal-pkg";

export default function Home() {
  const client = new UTS3ClientCore("us-east-2");

  return (
<div>Hello world</div>
  );
}
