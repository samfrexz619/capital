import { ConfigProvider, Space, Input, Button } from "antd";

export const DemoPage = () => {
  return (
    <div>
      <p>demo page</p>
      <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#ff0000',
            algorithm: true, // Enable algorithm
          },
          Input: {
            colorPrimary: '#eb2f96',
            algorithm: true, // Enable algorithm
          }
        },
      }}
    >
      <Space>
        <div style={{ fontSize: 14 }}>Enable algorithm: </div>
        <Input placeholder="Please Input" />
        <Button type="primary">Submit</Button>
      </Space>
    </ConfigProvider>
    </div>
  )
}


export const TeamPage = () => {
  return (
    <div>hi team</div>
  )
}
export const TaskPage = () => {
  return (
    <div>task</div>
  )
}
export const DocPage = () => {
  return (
    <div>docs</div>
  )
}
export const NotePage = () => {
  return (
    <div>note</div>
  )
}
export const SharePage = () => {
  return (
    <div>share</div>
  )
}

export const FavoritePage = () => {
  return (
    <div>favorite</div>
  )
}

export const SettingPage = () => {
  return (
    <div>settings</div>
  )
}

