{
  description = "My project with npm serve";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }: {
    defaultPackage.x86_64-linux = with nixpkgs.legacyPackages.x86_64-linux; stdenv.mkDerivation {
      name = "my-serve-project";
      buildInputs = [ nodejs ];
      shellHook = ''
        npm install serve
        PATH=$PATH:$(pwd)/node_modules/.bin
      '';
    };
  };
}
