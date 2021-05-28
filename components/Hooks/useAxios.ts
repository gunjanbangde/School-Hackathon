import { useState, useEffect } from "react";
import axios from "lib/http";
import { toast } from "react-toastify";

interface Props {
  url: string;
  method?:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH";
  manual?: boolean;
  showToast?: boolean;
  toastMessage?: string;
}

const useAxios = ({
  url,
  method = "get",
  manual = false,
  showToast = false,
  toastMessage = "",
}: Props) => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const errorToast = (message: string) =>
    toast(message, {
      className: "toast-container toast-container--error",
      bodyClassName: "toast-body",
      hideProgressBar: true,
      position: "top-center",
      autoClose: 10000,
    });

  const successToast = (message: string) =>
    toast(message, {
      className: "toast-container toast-container--success",
      bodyClassName: "toast-body",
      hideProgressBar: true,
      autoClose: 10000,
      position: "top-center",
    });

  useEffect(() => {
    if (method === "get" && !manual) {
      execute();
    }
  }, []);

  useEffect(() => {
    if (response) {
      if (showToast) {
        successToast(toastMessage || "SUCCESS!");
      }
    }
  }, [response, error]);

  const init = () => {
    setResponse(null);
    setError(null);
    setIsLoading(false);
  };

  const execute = (
    args = {
      data: {},
      params: {},
      options: {},
      slug: "",
    }
  ) => {
    init();
    setIsLoading(true);
    const { data, params, options, slug } = args;
    axios({
      url: slug ? `${url}/${slug}` : url,
      method,
      params,
      data,
      ...options,
    })
      .then((res) => {
        if (res?.data?.status === "SUCCESS") {
          if (res?.data?.data) {
            setResponse(res?.data?.data);
          } else {
            setResponse("SUCCESS");
          }
        }
        return response;
      })
      .catch((err) => {
        if (err.response) {
          errorToast(err.response.data);
          console.log(err.response);
        }
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    response,
    error,
    isLoading,
    execute,
  };
};

export default useAxios;
