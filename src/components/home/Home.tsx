import React, { useState } from "react";
import Card from "../global/style/Card";
import { Text, TextField } from "office-ui-fabric-react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Nav, INavLink } from "office-ui-fabric-react/lib/Nav";
import SettingStyle from "./styles/SettingStyle";
import { checkErrors, errorData } from "../global/common/error";
import { connect } from "react-redux";
import { updateProfile } from "../../stores/user/action";
interface Props {
  error: any;
  updateProfile: any;
  auth: any;
}

const Home: React.FC<Props> = ({ error, updateProfile, auth: { user } }) => {
  const [menuSidebar, setMenuSidebar] = useState("account");
  const [formUpdateProfile, setFormUpdateProfile] = useState({
    name: "",
    email: ""
  });

  const onChangeTextField = (e: any) => {
    setFormUpdateProfile({
      ...formUpdateProfile,
      [e.target.name]: e.target.value
    });
  };
  const { email: emailData, name: nameData } = user;
  const { email, name } = formUpdateProfile;
  const onUpdateProfile = () => {
    console.log(formUpdateProfile);
    updateProfile({ email, name });
  };

  const _onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    if (item && item.key) {
      setMenuSidebar(item.key);
    }
  };
  return (
    <SettingStyle className="container">
      <Card height="100" margin="20,0,0,0">
        <div className="row no-gutters">
          <div className="col-md-3">
            <Nav
              onLinkClick={(ev: any, item: any) => _onLinkClick(ev, item)}
              selectedKey={menuSidebar}
              selectedAriaLabel="Selected"
              ariaLabel="Nav basic example"
              styles={{
                root: {
                  width: "100%",
                  height: 350,
                  boxSizing: "border-box",
                  border: "1px solid #eee",
                  overflowY: "auto",
                  backgroundColor: "white"
                }
              }}
              groups={[
                {
                  links: [
                    {
                      value: "value",
                      name: "Account",
                      url: "#",
                      icon: "UserFollowed",
                      key: "account",
                      isExpanded: true
                    },
                    {
                      value: "value",
                      name: "Security",
                      url: "#",
                      icon: "LaptopSecure",
                      key: "security",
                      isExpanded: true
                    }
                  ]
                }
              ]}
            />
          </div>
          <div className="col-md-9">
            <div className="tab">
              <Text variant="xLarge">General</Text>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    label="First Name"
                    name="name"
                    onRenderDescription={() =>
                      errorData({ error: checkErrors("name", error) })
                    }
                    onChange={(e: any) => onChangeTextField(e)}
                    value={name}
                    placeholder={nameData}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Last Name"
                    placeholder="Masukan lastname "
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    onRenderDescription={() =>
                      errorData({ error: checkErrors("email", error) })
                    }
                    onChange={(e: any) => onChangeTextField(e)}
                    value={email}
                    placeholder={emailData}
                  />
                </div>
              </div>
              <PrimaryButton onClick={() => onUpdateProfile()}>
                Save the Changes
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Card>
    </SettingStyle>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  error: state.error
});
export default connect(mapStateToProps, { updateProfile })(Home);
