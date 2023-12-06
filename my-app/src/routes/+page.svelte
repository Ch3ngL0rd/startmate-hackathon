<script>
  import { onMount } from "svelte";

  import { slide } from "svelte/transition";
  import grid from "../images/grid.jpg";
  import { fade } from "svelte/transition";
  let isVisible1 = false;
  let isVisible2 = false;
  let isVisible3 = false;

  // You can adjust the parameters to control the animation

  let loading = true;
  onMount(async () => {
    // wait 2 seconds
    await new Promise((r) => setTimeout(r, 2000));
    // stops loading
    loading = false;
    // starts text streaming
    await new Promise((r) => setTimeout(r, 2000));
    // first button comes
    isVisible1 = true;
    // start second text streaming
    let thing = document.getElementById("fuckcunt2");
    thing.classList.remove("hidden");
    thing.id = "typewriter";
    await new Promise((r) => setTimeout(r, 2000));

    isVisible2 = true;

    let thing2 = document.getElementById("fuckcunt3");
    thing2.classList.remove("hidden");
    thing2.id = "typewriter";
    await new Promise((r) => setTimeout(r, 2000));

    isVisible3 = true;
  });
</script>

<body>
  {#if loading}
    <div class="flex flex-row justify-center items-center h-screen w-full">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  {:else}
    <div class="absolute left-0 px-4 py-4 hover:-translate-y-2">
      <svg
        width="47"
        height="50"
        viewBox="0 0 47 50"
        xmlns="http://www.w3.org/2000/svg"
        class="hover:text-black w-10 h-10"
      >
        <path
          d="M19.8135 45.6633H9.80888C6.56709 45.6515 3.93867 43.0328 3.91485 39.7911V19.8906C3.92122 18.8053 4.40682 17.7784 5.24155 17.0849L7.00324 15.78C7.64639 15.0947 7.71179 14.0491 7.15903 13.2891C6.60628 12.529 5.59139 12.2691 4.74132 12.6698L2.93614 14.0183C1.1152 15.4272 0.0346042 17.5884 0 19.8906V39.8128C0.011961 45.2251 4.39655 49.6097 9.80888 49.6217H19.8135C20.8946 49.6217 21.7709 48.7453 21.7709 47.6643C21.7709 46.5832 20.8946 45.7068 19.8135 45.7068V45.6633Z"
          fill="#959595"
        />
        <path
          d="M47 19.8471C46.9771 17.5618 45.9317 15.4071 44.1509 13.9748L29.1222 1.99097C25.8196 -0.663656 21.1151 -0.663656 17.8126 1.99097L13.0495 5.44909C12.1546 6.09172 11.9502 7.33811 12.5928 8.23298C13.2354 9.12786 14.4818 9.33235 15.3767 8.68972L20.205 5.07935C22.1001 3.51914 24.8347 3.51914 26.7298 5.07935L41.7585 17.0632C42.6234 17.7488 43.1345 18.7869 43.1504 19.8906V39.8128C43.1504 43.056 40.5213 45.6851 37.2781 45.6851H32.8195C32.3631 45.6851 31.9931 45.3151 31.9931 44.8586V35.8762C31.9931 33.0139 29.6791 30.6901 26.8168 30.6781H20.292C18.9134 30.6781 17.5912 31.2258 16.6164 32.2006C15.6416 33.1754 15.0939 34.4976 15.0939 35.8762V39.3126C15.0939 40.3936 15.9703 41.27 17.0514 41.27C18.1324 41.27 19.0088 40.3936 19.0088 39.3126V35.8762C19.003 35.5379 19.1333 35.2114 19.3705 34.9701C19.6077 34.7288 19.9319 34.593 20.2703 34.593H26.795C27.4917 34.593 28.0565 35.1578 28.0565 35.8545V44.8586C28.0684 47.4807 30.1974 49.5999 32.8195 49.5999H37.1694C42.5867 49.5999 46.9783 45.2084 46.9783 39.7911L47 19.8471Z"
          fill="#959595"
        />
      </svg>
    </div>
    <div class="absolute right-0 px-4 py-4 hover:-translate-y-2">
      <svg
        width="575"
        height="634"
        viewBox="0 0 575 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class=" w-10 h-10"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M419.747 51.149C387.543 18.394 342.097 0.333344 289.067 0.333344C236.037 0.333344 190.591 18.394 158.389 51.149C126.212 83.8787 108.548 129.964 108.548 183.667C108.548 255.967 140.027 302.567 178.987 330.54C186.558 335.973 194.383 340.69 202.277 344.757C158.738 356.72 123.386 377.577 94.6031 403.447C49.0907 444.35 20.8824 496.977 1.87773 544.1C-1.56494 552.637 2.5644 562.347 11.1014 565.79C19.6381 569.233 29.3491 565.103 32.7917 556.567C50.8807 511.713 76.7154 464.34 116.884 428.237C156.65 392.5 211.336 367 289.067 367C361.733 367 414.193 389.283 453.133 421.263C492.4 453.51 518.843 496.387 537.79 538.773C550.43 567.053 528.247 600.333 493.423 600.333H108.829C99.6247 600.333 92.1627 607.797 92.1627 617C92.1627 626.203 99.6247 633.667 108.829 633.667H493.423C548.493 633.667 592.263 578.96 568.223 525.173C548.107 480.173 519.013 432.23 474.29 395.503C447.743 373.703 416.01 356.123 378.01 345.357C398.333 334.12 415.04 319.207 428.333 302.303C457.097 265.733 469.587 220.339 469.587 183.667C469.587 129.964 451.923 83.8787 419.747 51.149ZM395.977 74.5177C421.147 100.121 436.253 137.37 436.253 183.667C436.253 213.661 425.803 251.6 402.133 281.697C378.917 311.217 342.69 333.667 289.067 333.667C267.38 333.667 229.963 326.103 198.428 303.46C167.75 281.433 141.881 244.701 141.881 183.667C141.881 137.37 156.988 100.121 182.159 74.5177C207.305 48.9393 243.783 33.6667 289.067 33.6667C334.35 33.6667 370.83 48.9393 395.977 74.5177Z"
          fill="#959595"
        />
      </svg>
    </div>

    <div class="flex flex-col items-center justify-center h-screen">
      <div
        class="bg-gray-100 dark:bg-gray-800 rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-6xl hover:shadow relative"
        data-v0-t="card"
      >
        <div
          class=" hover:bg-gray-400 px-4 py-1 absolute left-0 border border-black rounded m-4 text-sm"
          id="fuck"
        >
          Feedback
        </div>

        <div class="flex flex-col space-y-1.5 p-6">
          <p class="flex flex-row justify-center text-slate-600 font-[Virgil]">
            2x + 4 = 0 (solve for x)
          </p>
        </div>
        <div class="p-6 divide-y divide-gray-200">
          <div transition:slide class="transition duration-300 ease-in-out">
            <div
              class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg"
            >
              <div
                class="ml-4 px-6 text-orange-500 font-bold font-[Virgil] w-[8rem]"
              >
                2x = -4
              </div>

              <div class="py-2 rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 1</div>
                  {#if isVisible1}
                    <div transition:fade>
                      <div
                      id="fucking-button-shadow"

                        class="typerwriter border-green-600 text-green-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                      >
                        Correct
                      </div>
                    </div>
                  {/if}
                </div>
                <div
                  id="typewriter"
                  class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  Your first step was subtracting 4 from both sides, which is
                  correct.
                </div>
              </div>
            </div>
          </div>
          <div transition:slide class="transition duration-300 ease-in-out">
            <div
              class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg"
            >
              <div
                class="ml-4 px-6 text-orange-500 font-bold font-[Virgil] w-[8rem]"
              >
                x = -4/2
              </div>

              <div class="py-2 rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 2</div>
                  {#if isVisible2}
                    <div transition:fade>
                      <div
                      id="fucking-button-shadow"
                        class="border-red-600 text-red-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                      >
                        Incorrect
                      </div>
                    </div>
                  {/if}
                </div>
                <div
                  id="fuckcunt2"
                  class=" hidden mt-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  You then divided both sides by negative 2 which is incorrect,
                  you should divide both sides by 2
                </div>
              </div>
            </div>
          </div>

          <div transition:slide class="transition duration-300 ease-in-out">
            <div
              class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg"
            >
              <div
                class="ml-4 px-6 text-orange-500 font-bold font-[Virgil] w-[8rem]"
              >
                x = -2
              </div>

              <div class="py-2 rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 3</div>
                  {#if isVisible3}
                    <div transition:fade>
                      <div
                      id="fucking-button-shadow"
                        class="border-green-600 text-green-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                      >
                        Correct
                      </div>
                    </div>
                  {/if}
                </div>
                <div
                  id="fuckcunt3"
                  class="hidden mt-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  Following on from your previous step you solved for x, this is
                  correct
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center p-4 flex-col">
          
          <div class="font-medium">Advice for next time</div>
          <div>
            <div
              class="text-sm text-gray-500 dark:text-gray-400 justify-center px-20"
            >
              You should divide both sides by 2 instead of -2. You don't need to
              change the sign when dividing or multiplying algebraic
              expressions.
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center flex-row justify-center space-x-6 p-4">
            <div class="text-sm font-bold">Total</div>
            <div class="text-sm font-bold">2/3</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row justify-center items-center space-x-4 mt-10 gap-20"
      >
        <div
          class="bg-[#feebda] rounded-xl shadow-inner px-5 py-5 text-center w-[9.5rem] hover:-translate-y-2 hover:bg-orange-400 font-semibold text-[#c96c16]"
          id="cunt1"
        >
          Try again
        </div>

        <div
          class=" bg-[#de6e00] rounded-xl px-5 py-5 shadow-lg text-center w-[9.5rem] hover:-translate-y-2 hover:bg-orange-800 font-semibold text-white"
          id="cunt"
        >
          Next Question
        </div>
      </div>
    </div>
  {/if}
</body>

<style>
  body {
    background-image: url("../images/grid.jpg");
    background-size: cover;
    background-position: center;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    color: black;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: black transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    font-size: 2rem;
  }

  div {
    font-size: 1rem;
  }
  #fuck {
    font-size: 0.8rem;
  }

  #cunt {
    box-shadow:
      4px 4px 4px rgba(0, 0, 0, 0.25),
      inset 2px 4px 4px #f6a963;
  }

  #cunt1{
    box-shadow:
    4px 4px 4px rgba(0, 0, 0, 0.25),
      inset 2px 4px 4px #eec7a3;
  }

  #typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    animation:
      typing 2s steps(40, end),
      blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }


  #fucking-button-shadow{
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
</style>
