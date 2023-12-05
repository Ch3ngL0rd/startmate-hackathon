<script>
  import { onMount } from "svelte";

  import { slide } from "svelte/transition";
  import grid from "../images/grid.jpg";

  // You can adjust the parameters to control the animation

  let loading = true;
  onMount(async () => {
    // wait 2 seconds
    // await new Promise(r => setTimeout(r, 2000));
    loading = false;
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
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        class="bg-gray-100 dark:bg-gray-800 rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl hover:shadow"
        data-v0-t="card"
      >
        <div class=" hover:bg-gray-400 px-2 py-2">Feedback</div>
        <div class="flex flex-col space-y-1.5 p-6">
          <p class="flex flex-row justify-center">2x + 4 = 0 (solve for x)</p>
        </div>
        <div class="p-6 divide-y divide-gray-200">
          <div transition:slide class="transition duration-300 ease-in-out">
            <div class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg">
              <div class="ml-4 px-6 text-orange-500 font-bold ">2x = -4</div>

              <div class="py-2  rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 1</div>
                  <div
                    class="bg-green-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                  >
                    Correct
                  </div>
                </div>
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Your first step was subtracting 4 from both sides, which is
                  correct.
                </div>
              </div>
            </div>
          </div>
          <div transition:slide class="transition duration-300 ease-in-out">
            <div class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg">
              <div class="ml-4 px-6 text-orange-500 font-bold ">2x = -4</div>

              <div class="py-2  rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 2</div>
                  <div
                  class="bg-red-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                >
                  Incorrect
                </div>

                </div>
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    You then divided both sides by negative 2 which is incorrect,
                    you should divide both sides by 2
                </div>
              </div>
            </div>
          </div>

          <div transition:slide class="transition duration-300 ease-in-out">
            <div class="flex flex-row justify-start items-center w-full space-x-4 hover:shadow-lg">
              <div class="ml-4 px-6 text-orange-500 font-bold ">2x = -4</div>

              <div class="py-2  rounded px-4 flex-grow">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium">Part 3</div>
                  <div
                    class="bg-green-600 inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
                  >
                    Correct
                  </div>
                </div>
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Following on from your previous step you solved for x, this is
                    correct
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div class="flex items-center justify-between p-4">
            <div class="text-sm font-medium">Total</div>
            <div class="text-sm font-medium">2/3</div>
          </div>
        </div>
        <div class="flex items-center p-4 flex-col">
          <div class="font-medium">Advice for next time</div>
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              You should divide both sides by 2 instead of -2. You don't need to
              change the sign when dividing or multiplying algebraic
              expressions.
            </div>
          </div>
        </div>

        <div class="p-4">
          <button
            class=" hover:bg-slate-700 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            Next Question
          </button>
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
</style>
