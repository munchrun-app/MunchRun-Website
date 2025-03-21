/**
 * Smoothly scroll to a specific element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (useful for fixed headers)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Setup smooth scrolling for all anchor links
 */
export const setupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (targetId && document.getElementById(targetId)) {
        e.preventDefault();
        scrollToElement(targetId, 64); // 64px offset for header
      }
    });
  });
};
