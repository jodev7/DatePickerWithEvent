import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useHistory } from "react-router";
import { RouteNames } from "../router/index";
import { useTypedSelector } from '../hooks/useTypedselector';
import { useActions } from '../hooks/useActions';

export const Navbar: FC = () => {
  const router = useHistory();
  const {isAuth, user} = useTypedSelector(state => state.auth) 
  const {logout} = useActions()

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white", marginRight: 10 }}>{user.username}</div>
            <Menu
              className="menu"
              theme="dark"
              mode="horizontal"
              selectable={false}
            >
              <Menu.Item onClick={logout} key={1}>
                Log out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            selectable={false}
          >
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
