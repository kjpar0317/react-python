import { useAtom } from "jotai";
import { useAtomDevtools } from "jotai/devtools";

function useJotaiAtom(key: string, atomStore: any) {
  const [jotaiState, setJotaiState] = useAtom<any>(atomStore);

  useAtomDevtools(atomStore);

  if (process.env.NODE_ENV !== "production") {
    atomStore.debugLabel = key;
  }

  return [jotaiState, setJotaiState];
}

export default useJotaiAtom;
export { useJotaiAtom };
