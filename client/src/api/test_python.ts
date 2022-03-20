import { atomWithQuery } from "jotai/query";

import axiosUtils from "@util/axios-util";

const pythonTestAtom = atomWithQuery(() => ({
  // queryKey: ["users", get(idAtom)],
  queryKey: ["pythonTest"],
  queryFn: async function (): Promise<any> {
    // const res = await axiosUtils.get(`http://localhost:8000/testApi`);
    const res = await axiosUtils.get(`/api/testApi`);
    console.log(res);

    if (res && res.data) {
      return res.data;
    } else {
      console.log(res);
    }
  }
}));

export { pythonTestAtom };
