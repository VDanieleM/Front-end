export const deleteCompany = (company) => ({
  type: "REMOVE_COMPANY_FROM_FAVORITES",
  payload: company,
});

export const addCompany = (company) => ({
  type: "ADD_COMPANY_TO_FAVORITES",
  payload: company,
});
