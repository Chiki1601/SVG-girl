new Vue({
  el: "#app",
  methods: {
    coordenates(e) {
      console.log(e.clientY);
      let incrementX = e.clientX >= 300 ? 10 : -10;
      let incrementY = e.clientY >= 260 ? 10 : -10;
      TweenMax.to("#left-eye", 2, {
        x: incrementX,
        y: incrementY });

      TweenMax.to("#right-eye", 2, {
        x: incrementX,
        y: incrementY });

    } },

  mounted() {
    TweenMax.to("#left-eye", 2, {
      x: -10,
      height: 0,
      attr: {
        r: "8" },

      repeat: 1,
      yoyo: true });


    TweenMax.to("#left-eyebrow", 2, {
      y: -30,
      rotation: -5,
      transformOrigin: "50% 50%" });


    TweenMax.to("#right-eye", 2, {
      x: -10,
      attr: {
        r: "8" },

      repeat: 1,
      yoyo: true });


    TweenMax.to("#right-eyebrow", 2, {
      y: -30,
      rotation: 5,
      transformOrigin: "50% 50%" });


    TweenMax.to("#hair", 10, {
      attr: {
        d:
        "M277.76,60.9c-3.9,2.92-6.44,1.55-8.94-2.13C261.9,43,227.54,27.24,200.49,27,170.73,47.66,171.58,66.3,175,85s3.93,50.93-28,22S94.59,70.5,78.36,99.43s-32.81,95.27-8,98.11S86,229.82,68,242,23,253,19.49,282,1.47,362.77,12,388s50.92,69.06,73.73,46.22S120.79,416.86,165,416s43.37,59.53,87.58,53.44S383,443.35,399,413s-27.91-49.38,12-51,97.3-29.8,80.19-63.3S453.27,210.81,426,201c-34-39-49.41-20.42-30-61,11-23,47-58-22.88-97.77C344.63,20.32,302.59,41.12,287.76,50.9Z" },

      repeat: -1,
      yoyo: true });

  } });