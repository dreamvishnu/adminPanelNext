import { Button, Col, InputField, Row, getItem, setItem } from "@/components";
import { themesSetting } from "@/recoil";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import router, { withRouter } from "next/router";

const defaultValue = {
  username: "",
  password: ""
};

const Admin = (props: any) => {
  const setTheme = useSetRecoilState(themesSetting);
  useEffect(() => {
    const userData = getItem("userdata");
    if (userData?.token === 12341210) {
      console.log("Valid admin token, redirecting to dashboardAdmin");
      router.replace("/dashboardAdmin"); // Use replace to avoid history stack issues
    }
    setTheme({
      header: false,
      sidebar: false,
      footer: false,
      content: true
    });
    return () => {
      setTheme({
        header: true,
        sidebar: true,
        footer: true,
        content: true
      });
    };
  }, [props.router, setTheme]);
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValue
  });
  const [password, setPassword] = useState(true);

  const onSubmit = async (data: any) => {
    
    setItem("userdata", {
      userid: "sam",
      username: "Samsul Arifin",
      token: 12341210,
      role: "admin"
    });
    props.router.push("/dashboardAdmin");
  };

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>ADMIN </b>APP
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="login-box-msg">Sign in to start your session</p>
            <InputField
              label="Username"
              name="username"
              type="text"
              register={register("username")}
              iconFormGroup="fas fa-envelope"
              formGroup
              errors={errors?.username}
              placeholder="Silahkan Masukan Userid"
            />
            <InputField
              label="Password"
              name="password"
              type="text"
              register={register("password")}
              placeholder="Silahkan Masukan Password"
              iconFormGroup={password ? "fas fa-eye-slash" : "fas fa-eye"}
              customeCss={password ? "password-hide-css" : ""}
              btnAction={() => setPassword(!password)}
              formGroup
              errors={errors?.password}
            />
            <Row>
              <Col size="12">
                <Button
                  loading
                  disabled={!isDirty || !isValid}
                  textLoading="Waiting"
                  type="submit"
                  color="primary"
                  block
                  title="Sign In"
                />
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Admin);
