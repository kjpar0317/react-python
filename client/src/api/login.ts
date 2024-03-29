import axiosUtils from "@util/axios-util";

async function loginApi(payload: object) {
  const res = await axiosUtils.post(`/api/user/login`, payload);

  if (res && res.data) {
    return res.data;
  } else {
    console.log(res);
  }
}

export { loginApi };
