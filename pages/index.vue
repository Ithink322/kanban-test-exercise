<template>
  <div class="container">
    <div class="container__sections-grid">
      <section class="container__section">
        <div
          class="container__section-header container__section-header-HOLD-ON"
        >
          <span class="container__section-header-title"
            >ON HOLD ({{ onHoldtasks.length }})</span
          >
        </div>
        <UIOnHoldTasksList
          v-if="onHoldtasks.length > 0"
          :onHoldtasks="onHoldtasks"
        ></UIOnHoldTasksList>
        <textarea
          v-model="onHoldtext"
          placeholder="Введите заголовок для этой карточки"
          class="container__section-add-task-textarea container__section-add-on-hold-task-textarea"
          rows="6"
        ></textarea>
        <button
          @click="showAddOnHoldTasksForm"
          class="container__section-add-task-btn container__section-add-on-hold-task-btn"
        >
          <img
            class="container__section-add-task-plus-icon container__section-add-on-hold-task-plus-icon"
            src="@/public/imgs/plus-icon.png"
            alt=""
          />
          Добавить карточку
          <img
            @click="closeOnHoldTasksForm"
            class="container__section-add-task-close-icon container__section-add-on-hold-task-close-icon"
            src="@/public/imgs/cross.svg"
            alt=""
          />
        </button>
      </section>
      <section class="container__section">
        <div
          class="container__section-header container__section-header-IN-PROGRESS"
        >
          <span class="container__section-header-title"
            >IN PROGRESS ({{ inProgressTasks.length }})</span
          >
        </div>
        <UIInProgressTasksList
          v-if="inProgressTasks.length > 0"
          :inProgressTasks="inProgressTasks"
        ></UIInProgressTasksList>
        <textarea
          v-model="inProgresstext"
          placeholder="Введите заголовок для этой карточки"
          class="container__section-add-in-progress-task-textarea container__section-add-task-textarea"
          rows="6"
        ></textarea>
        <button
          @click="showAddInProgressTasksForm"
          class="container__section-add-task-btn container__section-add-in-progress-task-btn"
        >
          <img
            class="container__section-add-task-plus-icon container__section-add-in-progress-task-plus-icon"
            src="@/public/imgs/plus-icon.png"
            alt=""
          />
          Добавить карточку
          <img
            @click="closeInProgressTasksForm"
            class="container__section-add-task-close-icon container__section-add-in-progress-task-close-icon"
            src="@/public/imgs/cross.svg"
            alt=""
          />
        </button>
      </section>
      <section class="container__section">
        <div
          class="container__section-header container__section-header-NEEDS-REVIEW"
        >
          <span class="container__section-header-title"
            >NEEDS REVIEW ({{ needsReviewTasks.length }})</span
          >
        </div>
        <UINeedsReviewTasksList
          v-if="needsReviewTasks.length > 0"
          :needsReviewTasks="needsReviewTasks"
        ></UINeedsReviewTasksList>
        <textarea
          v-model="needsReviewtext"
          placeholder="Введите заголовок для этой карточки"
          class="container__section-add-needs-review-task-textarea container__section-add-task-textarea"
          rows="6"
        ></textarea>
        <button
          @click="showAddNeedsReviewTasksForm"
          class="container__section-add-task-btn container__section-add-needs-review-task-btn"
        >
          <img
            class="container__section-add-task-plus-icon container__section-add-needs-review-task-plus-icon"
            src="@/public/imgs/plus-icon.png"
            alt=""
          />
          Добавить карточку
          <img
            @click="closeNeedsReviewTasksForm"
            class="container__section-add-task-close-icon container__section-add-needs-review-task-close-icon"
            src="@/public/imgs/cross.svg"
            alt=""
          />
        </button>
      </section>
      <section class="container__section">
        <div
          class="container__section-header container__section-header-APPROVED"
        >
          <span class="container__section-header-title"
            >APPROVED ({{ approvedTasks.length }})</span
          >
        </div>
        <UIApprovedTasksList
          v-if="approvedTasks.length > 0"
          :approvedTasks="approvedTasks"
        ></UIApprovedTasksList>
        <textarea
          v-model="approvedtext"
          placeholder="Введите заголовок для этой карточки"
          class="container__section-add-approved-task-textarea container__section-add-task-textarea"
          rows="6"
        ></textarea>
        <button
          @click="showAddApprovedTasksForm"
          class="container__section-add-task-btn container__section-add-approved-task-btn"
        >
          <img
            class="container__section-add-task-plus-icon container__section-add-approved-task-plus-icon"
            src="@/public/imgs/plus-icon.png"
            alt=""
          />
          Добавить карточку
          <img
            @click="closeApprovedTasksForm"
            class="container__section-add-task-close-icon container__section-add-approved-task-close-icon"
            src="@/public/imgs/cross.svg"
            alt=""
          />
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useOnHoldTasksStore } from "~/store/onHoldTasks";
import { useInProgressTasksStore } from "~/store/inProgressTasks";
import { useNeedsReviewTasksStore } from "~/store/needsReviewTasks";
import { useApprovedTasksStore } from "~/store/approvedTasks";
const onHoldStore = useOnHoldTasksStore(),
  inProgressStore = useInProgressTasksStore(),
  needsReviewStore = useNeedsReviewTasksStore(),
  approvedStore = useApprovedTasksStore();

const onHoldtasks = ref([]),
  inProgressTasks = ref([]),
  needsReviewTasks = ref([]),
  approvedTasks = ref([]),
  onHoldtext = ref(""),
  inProgresstext = ref(""),
  needsReviewtext = ref(""),
  approvedtext = ref("");

onMounted(() => {
  onHoldtasks.value = onHoldStore.onHoldTasks;
  inProgressTasks.value = inProgressStore.inProgressTasks;
  needsReviewTasks.value = needsReviewStore.needsReviewTasks;
  approvedTasks.value = approvedStore.approvedTasks;
});

const showAddOnHoldTasksForm = (e) => {
  if (!e.target.classList.contains("container__section-add-task-close-icon")) {
    document.querySelector(
      ".container__section-add-on-hold-task-textarea"
    ).style.display = "block";
    document
      .querySelector(".container__section-add-on-hold-task-btn")
      .classList.add("container__section-add-task-btn-active");
    document.querySelector(
      ".container__section-add-on-hold-task-plus-icon"
    ).style.display = "none";
    document
      .querySelector(".container__section-add-on-hold-task-close-icon")
      .classList.add("container__section-add-task-close-icon-active");
    if (e.target.classList.contains("container__section-add-task-btn-active")) {
      if (onHoldtext.value.trim() !== "") {
        onHoldStore.addHoldOnTask(onHoldtext.value);
        onHoldtext.value = "";
        document.querySelector(
          ".container__section-add-on-hold-task-textarea"
        ).style.display = "none";
        document
          .querySelector(".container__section-add-on-hold-task-btn")
          .classList.remove("container__section-add-task-btn-active");
        document
          .querySelector(".container__section-add-on-hold-task-close-icon")
          .classList.remove("container__section-add-task-close-icon-active");
        document.querySelector(
          ".container__section-add-on-hold-task-plus-icon"
        ).style.display = "block";
      }
    }
  }
};
const showAddInProgressTasksForm = (e) => {
  if (!e.target.classList.contains("container__section-add-task-close-icon")) {
    document.querySelector(
      ".container__section-add-in-progress-task-textarea"
    ).style.display = "block";
    document
      .querySelector(".container__section-add-in-progress-task-btn")
      .classList.add("container__section-add-task-btn-active");
    document.querySelector(
      ".container__section-add-in-progress-task-plus-icon"
    ).style.display = "none";
    document
      .querySelector(".container__section-add-in-progress-task-close-icon")
      .classList.add("container__section-add-task-close-icon-active");
    if (e.target.classList.contains("container__section-add-task-btn-active")) {
      if (inProgresstext.value.trim() !== "") {
        inProgressStore.addInProgressTask(inProgresstext.value);
        inProgresstext.value = "";
        document.querySelector(
          ".container__section-add-in-progress-task-textarea"
        ).style.display = "none";
        document
          .querySelector(".container__section-add-in-progress-task-btn")
          .classList.remove("container__section-add-task-btn-active");
        document
          .querySelector(".container__section-add-in-progress-task-close-icon")
          .classList.remove("container__section-add-task-close-icon-active");
        document.querySelector(
          ".container__section-add-in-progress-task-plus-icon"
        ).style.display = "block";
      }
    }
  }
};
const showAddNeedsReviewTasksForm = (e) => {
  if (!e.target.classList.contains("container__section-add-task-close-icon")) {
    document.querySelector(
      ".container__section-add-needs-review-task-textarea"
    ).style.display = "block";
    document
      .querySelector(".container__section-add-needs-review-task-btn")
      .classList.add("container__section-add-task-btn-active");
    document.querySelector(
      ".container__section-add-needs-review-task-plus-icon"
    ).style.display = "none";
    document
      .querySelector(".container__section-add-needs-review-task-close-icon")
      .classList.add("container__section-add-task-close-icon-active");
    if (e.target.classList.contains("container__section-add-task-btn-active")) {
      if (needsReviewtext.value.trim() !== "") {
        needsReviewStore.addNeedsReviewTask(needsReviewtext.value);
        needsReviewtext.value = "";
        document.querySelector(
          ".container__section-add-needs-review-task-textarea"
        ).style.display = "none";
        document
          .querySelector(".container__section-add-needs-review-task-btn")
          .classList.remove("container__section-add-task-btn-active");
        document
          .querySelector(".container__section-add-needs-review-task-close-icon")
          .classList.remove("container__section-add-task-close-icon-active");
        document.querySelector(
          ".container__section-add-needs-review-task-plus-icon"
        ).style.display = "block";
      }
    }
  }
};
const showAddApprovedTasksForm = (e) => {
  if (!e.target.classList.contains("container__section-add-task-close-icon")) {
    document.querySelector(
      ".container__section-add-approved-task-textarea"
    ).style.display = "block";
    document
      .querySelector(".container__section-add-approved-task-btn")
      .classList.add("container__section-add-task-btn-active");
    document.querySelector(
      ".container__section-add-approved-task-plus-icon"
    ).style.display = "none";
    document
      .querySelector(".container__section-add-approved-task-close-icon")
      .classList.add("container__section-add-task-close-icon-active");
    if (e.target.classList.contains("container__section-add-task-btn-active")) {
      if (approvedtext.value.trim() !== "") {
        approvedStore.addApprovedTask(approvedtext.value);
        approvedtext.value = "";
        document.querySelector(
          ".container__section-add-approved-task-textarea"
        ).style.display = "none";
        document
          .querySelector(".container__section-add-approved-task-btn")
          .classList.remove("container__section-add-task-btn-active");
        document
          .querySelector(".container__section-add-approved-task-close-icon")
          .classList.remove("container__section-add-task-close-icon-active");
        document.querySelector(
          ".container__section-add-approved-task-plus-icon"
        ).style.display = "block";
      }
    }
  }
};
const closeOnHoldTasksForm = () => {
  document.querySelector(
    ".container__section-add-on-hold-task-textarea"
  ).style.display = "none";
  document
    .querySelector(".container__section-add-on-hold-task-btn")
    .classList.remove("container__section-add-task-btn-active");
  document
    .querySelector(".container__section-add-on-hold-task-close-icon")
    .classList.remove("container__section-add-task-close-icon-active");
  document.querySelector(
    ".container__section-add-on-hold-task-plus-icon"
  ).style.display = "block";
};
const closeInProgressTasksForm = () => {
  document.querySelector(
    ".container__section-add-in-progress-task-textarea"
  ).style.display = "none";
  document
    .querySelector(".container__section-add-in-progress-task-btn")
    .classList.remove("container__section-add-task-btn-active");
  document
    .querySelector(".container__section-add-in-progress-task-close-icon")
    .classList.remove("container__section-add-task-close-icon-active");
  document.querySelector(
    ".container__section-add-in-progress-task-plus-icon"
  ).style.display = "block";
};
const closeNeedsReviewTasksForm = () => {
  document.querySelector(
    ".container__section-add-needs-review-task-textarea"
  ).style.display = "none";
  document
    .querySelector(".container__section-add-needs-review-task-btn")
    .classList.remove("container__section-add-task-btn-active");
  document
    .querySelector(".container__section-add-needs-review-task-close-icon")
    .classList.remove("container__section-add-task-close-icon-active");
  document.querySelector(
    ".container__section-add-needs-review-task-plus-icon"
  ).style.display = "block";
};
const closeApprovedTasksForm = () => {
  document.querySelector(
    ".container__section-add-approved-task-textarea"
  ).style.display = "none";
  document
    .querySelector(".container__section-add-approved-task-btn")
    .classList.remove("container__section-add-task-btn-active");
  document
    .querySelector(".container__section-add-approved-task-close-icon")
    .classList.remove("container__section-add-task-close-icon-active");
  document.querySelector(
    ".container__section-add-approved-task-plus-icon"
  ).style.display = "block";
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 1.25rem;
  background: rgb(54, 64, 68);
  min-height: 100vh;
}
.container__sections-grid {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  row-gap: 2rem;
  align-items: start;
}
.container__section {
  position: relative;
  background: rgb(38 50 56);
  padding: 2.5rem 0.6rem;
  min-height: 80px;
}
.container__section-header {
  position: absolute;
  padding: 0.6rem;
  height: 40px;
  width: 100%;
  left: 0rem;
  top: 0rem;
}
.container__section-header-HOLD-ON {
  background: #ffa500;
}
.container__section-header-IN-PROGRESS {
  background: #00bfff;
}
.container__section-header-NEEDS-REVIEW {
  background: #ffd900ab;
}
.container__section-header-APPROVED {
  background: #32cd32;
}
.container__section-header-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #fff;
}
.container__section-add-task-textarea {
  display: none;
  background: rgb(110, 110, 110);
  margin-top: 0.6rem;
  margin-bottom: 1.25rem;
  outline: none;
  padding: 0.6rem;
  resize: none;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #fff;
}
.container__section-add-task-textarea::placeholder {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #fff;
}
.container__section-add-task-btn {
  position: absolute;
  @include btn;
  gap: 0.5rem;
  color: rgb(100, 100, 100);
  height: 40px;
  width: 100%;
  justify-content: left;
  bottom: 0rem;
  left: 0rem;
  padding: 0.6rem;
}
.container__section-add-task-btn:hover {
  background: rgba(100, 100, 100, 0.596);
}
.container__section-add-task-btn-active {
  color: #fff;
  background: rgba(100, 100, 100, 0.596);
  gap: 1rem;
  width: fit-content;
  left: 0.6rem;
  bottom: 0.6rem;
}
.container__section-add-task-plus-icon {
  width: 18px;
  height: 18px;
}
.container__section-add-task-close-icon {
  display: none;
  margin-left: 9rem;
}
.container__section-add-task-close-icon-active {
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 2.5rem 2.5rem;
  }
  .container__sections-grid {
    grid-template-columns: repeat(2, 48.65%);
    row-gap: 2rem;
    column-gap: 1.15rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 2.5rem 10rem;
  }
  .container__sections-grid {
    grid-template-columns: repeat(4, 22.83%);
    column-gap: 2rem;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 2.5rem 15.938rem;
  }
  .container__sections-grid {
    grid-template-columns: repeat(4, 23.3%);
    column-gap: 2rem;
  }
}
</style>
