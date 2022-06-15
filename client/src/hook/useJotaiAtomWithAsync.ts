import { atom } from "jotai";
import { atomWithDefault, loadable } from "jotai/utils";

import axiosUtils from "@util/axios-util";

function useJotaiAtomWithAsync(url: string, config: object) {
  const baseAtom = atomWithDefault(async () => {
    const res = await axiosUtils(url, config);
    return res;
  });
  const asyncAtom = atom(
    get => get(baseAtom),
    (_get, set, arg: any) => set(baseAtom, arg)
  );
  const loadableAtom = loadable(asyncAtom);
  const finalAtom = atom(
    get => get(loadableAtom),
    (get, set, arg: (state: any) => any) => {
      const val = typeof arg === "function" ? arg(get(asyncAtom)) : arg;
      set(asyncAtom, val);
    }
  );

  return finalAtom;
}

// export const teamAtom = atom((get) => get(useJotaiAtomWithAsync(`/api/team?teamId=${get(programIdAtom)}`)));
// export const projectAtom = atom((get) => get(useJotaiAtomWithAsync(`/api/project?programId=${get(programIdAtom)}`)));

export default useJotaiAtomWithAsync;
export { useJotaiAtomWithAsync };
