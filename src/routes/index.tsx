import { ComponentProps, JSX, Show } from "solid-js";
import { Button } from "~/components/button";

export default function Home() {
  return (
    <main>
      <Button icon={<span>icon</span>}>content</Button>
      <div>
        correct render:{" "}
        <button>
          <span>icon</span>
          <span>content</span>
        </button>
      </div>
    </main>
  );
}
