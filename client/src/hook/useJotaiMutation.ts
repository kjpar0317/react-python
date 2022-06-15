import { useMutation } from "react-query";

function useJotaiMutation(func: any, options: object) {
  const mutation = useMutation(params => {
    return func(params);
  }, options);

  return mutation;
}

export default useJotaiMutation;
export { useJotaiMutation };
