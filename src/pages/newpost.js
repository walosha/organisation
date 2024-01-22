import React, { useContext } from "react";
import { newPostForm } from "@/utils/formConfig";
import { appendData, renderRepeatedSkeletons } from "@/utils";
import SkeletonElement from "@/components/Skeleton/SkeletonElement";
import useHttpClient from "@/hooks/useHttpClient";
import useForm from "@/hooks/useForm";
import { AuthContext } from "@/context/auth";
import ErrorModal from "@/components/modal/Error";

const NewPost = () => {
  const auth = useContext(AuthContext);
  const { currentUser } = auth;
  const { isLoading, sendReq, error, clearError } = useHttpClient();
  const { renderFormInputs, renderFormValues, isFormValid } =
    useForm(newPostForm);
  const formValues = renderFormValues();
  const formInputs = renderFormInputs();

  const postSubmitHandle = async (evt) => {
    evt.preventDefault(); //otherwise, there will be a reload
    const formData = appendData(formValues);
    // formData.append("author", currentUser.userId);
    try {
      await sendReq(`/api/post`, "POST", formData, {
        Authorization: `Bearer ${currentUser.token}`,
      });
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {isLoading ? (
        renderRepeatedSkeletons(<SkeletonElement type="text" />, 20)
      ) : (
        <div className="container-create-page">
          <form className="form form__create">
            <h2>Create a new post</h2>
            {formInputs}
            <button
              onClick={postSubmitHandle}
              className="btn"
              // disabled={!isFormValid()}
            >
              Submit <span>&rarr;</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default NewPost;
