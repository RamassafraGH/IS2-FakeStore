const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const getProductById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const createProduct = async (data: any) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateProduct = async (id: number, data: any) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteProduct = async (id: number) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
