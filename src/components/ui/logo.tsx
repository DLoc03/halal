import logo from "/logo.png";

type LogoProps = {
  size?: string;
  className?: string;
};

function Logo({ size = "100px", className }: LogoProps) {
  return (
    <div className={`flex ${className}`} style={{ width: size }}>
      <img
        className="m-auto rounded-full"
        src={logo}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Logo;
