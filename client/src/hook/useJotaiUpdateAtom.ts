import { useUpdateAtom } from "jotai/utils";
import { useAtomDevtools } from "jotai/devtools";

function useJotaiUpdateAtom(key: string, atomStore: any) {
  const jotaiParam = useUpdateAtom(atomStore);

  useAtomDevtools(atomStore);

  if (process.env.NODE_ENV !== "production") {
    atomStore.debugLabel = key;
  }

  return jotaiParam;
}

export default useJotaiUpdateAtom;
export { useJotaiUpdateAtom };
