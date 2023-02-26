import React from "react";

import styles from "./LoadingModal.module.css";

const LoadingModal = () => {
	return (
		<div className={styles.loading_modal}>
			<div className={styles.loading_background} />
			<div class={styles.loader}></div>
		</div>
	);
};

export default LoadingModal;
