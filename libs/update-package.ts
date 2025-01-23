import { $ } from "bun";


export async function updatePackage() {
    console.log('------------------- update apt -------------------')
    await $`sudo apt update && sudo apt upgrade -y`;

    console.log('------------------- update brew -------------------')
    await $`brew update`;
    await $`brew upgrade`;
}