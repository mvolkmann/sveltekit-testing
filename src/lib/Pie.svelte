<script>
  import {tweened} from 'svelte/motion';

  export let bgColor = 'tan';
  export let fgColor = 'blue';
  export let size = 50;
  export let value; // 0 to 100

  const store = tweened(value, {duration: 500});
  let dashArray = '';

  $: half = size / 2;
  $: viewBox = `0 0 ${size} ${size}`;
  $: circumference = 2 * Math.PI * half;

  $: {
    const v = Math.max(0, Math.min(100, value)); // ensures value in range
    store.set(v);
    const dash = ((v / 100) * circumference) / 2;
    dashArray = `${dash} ${circumference - dash}`;
  }
</script>

<svg height={size} width={size} {viewBox}>
  <circle class="bg" fill={bgColor} r={half} cx={half} cy={half} />
  <circle
    class="fg"
    r={half / 2}
    cx={half}
    cy={half}
    fill="transparent"
    stroke={fgColor}
    stroke-width={half}
    stroke-dasharray={dashArray}
  />
</svg>

<style>
  svg {
    transform: rotate(-90deg);
  }
</style>
