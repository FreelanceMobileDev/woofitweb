export function formatDOB(dob) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const date = new Date(dob);
    // Extract the day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Format the date as "14 Mar 2002"
    return `${day} ${month} ${year}`;
}

export  function dateFormateDate(dob) {
    const date = new Date(dob);
    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two-digit format
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    // Format the date as "dd/mm/yyyy"
    return `${year}-${month}-${day}`;
  }
  
  

export function calculateAge(dob) {
    const today = new Date();
    const dobDate = new Date(dob);
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    // Check if birthday has occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }

    return age;
  }


  export function convertDateFormat(inputDate) {
    const [year, month, day] = inputDate.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.toISOString();
}
