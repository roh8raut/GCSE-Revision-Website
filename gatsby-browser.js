/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated! ` +
      `Please reload to display the latest version.`
  )

  if (answer === true) {
    window.location.reload()
  }
}
