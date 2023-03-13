---
author: Erik Slagter
title: Eyes Exercise
date: 2021-03-12
description: These eyes will follow your cursor
tags: ["javascript", "animation"]
thumbnail: "https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" # https://picsum.photos/id/1060/5598/3732
---

## Eyes Exercise

For this exercise I used vanilla JS to make two eyeballs follow the cursor. First, I utilized the `getElementsByClassName()` function (elements, not element) to select both eyes. I then used the `onmousemove` function to calculate the x and y coordinates of the mouse as it moves across the browser. Next with some clever math and a for loop for assignment, I move the eye balls using CSS transforms.

{{< button color="primary" href="https://github.com/erik06/MIT-eye-movement" >}}
View Repository
{{< /button >}}

{{< button color="secondary" href="https://erik06.github.io/MIT-eye-movement/" >}}
View Live Project
{{< /button >}}
