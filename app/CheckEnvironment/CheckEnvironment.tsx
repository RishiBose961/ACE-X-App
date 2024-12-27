
const CheckEnvironment = () => {
    const base_url =
    process.env.EXPO_PUBLIC_API_URL==="development"
      ? "http://192.168.29.226:5000"
      : "https://ace-server-js.vercel.app"; 

      return {base_url}
}

export default CheckEnvironment