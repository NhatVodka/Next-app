import React from "react";

const UserProfilePage = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
};

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, res, req } = context;
  console.log(params);
  console.log(res);
  console.log(req);
  return {
    props: {
      username: "Nhat",
    },
  };
}
